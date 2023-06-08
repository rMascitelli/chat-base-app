package main

import (
	"fmt"
	"net/http"
)

type LoginPayload struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

func (app *Config) Broker(w http.ResponseWriter, r *http.Request) {
	// Just expecting Login requests for now
	var auth LoginPayload

	app.readJSON(w, r, &auth)
	payload := jsonResponse{
		Error:   false,
		Message: "Hit the broker",
		Data:    auth,
	}
	fmt.Printf("Auth credentials: %+v", auth)
	_ = app.writeJSON(w, http.StatusOK, payload)
}
