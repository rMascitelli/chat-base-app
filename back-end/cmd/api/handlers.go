package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

type jsonResponse struct {
	Error   bool   `json:"error"`
	Message string `json:"message"`
	Data    any    `json:"data,omitempty"`
}

type CustomRequest struct {
	Title string `json:"title"`
}

func (app *Config) decodeJSONRequest(r *http.Request) error {
	log.Println("Trying to decode JSON")

	// Declare a new Person struct.
	var c CustomRequest

	// Try to decode the request body into the struct. If there is an error,
	// respond to the client with the error message and a 400 status code.
	err := json.NewDecoder(r.Body).Decode(&c)
	if err != nil {
		fmt.Println("FAILURE while decoding")
		return err
	}

	// Do something with the Person struct...
	fmt.Printf("CustomRequest: %+v", c)
	return nil
}

func (app *Config) Broker(w http.ResponseWriter, r *http.Request) {
	payload := jsonResponse{
		Error:   false,
		Message: "Hit the broker",
	}

	err := app.decodeJSONRequest(r)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
	} else {
		out, _ := json.MarshalIndent(payload, "", "\t")
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusAccepted)
		w.Write(out)
	}
}
