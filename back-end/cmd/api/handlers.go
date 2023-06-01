package main

import (
	"fmt"
	"net/http"
)

type CustomRequest struct {
	Title string `json:"title"`
}

func (app *Config) Broker(w http.ResponseWriter, r *http.Request) {
	payload := jsonResponse{
		Error:   false,
		Message: "Hit the broker",
	}
	var c CustomRequest

	app.readJSON(w, r, &c)
	fmt.Printf("CustomRequest: %+v", c)
	_ = app.writeJSON(w, http.StatusOK, payload)
}
