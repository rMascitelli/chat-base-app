package main

import (
	"fmt"
	"net/http"
)

func (app *Config) Broker(w http.ResponseWriter, r *http.Request) {
	// Just expecting Auth requests for now
	var auth AuthPayload

	app.readJSON(w, r, &auth)
	payload := jsonResponse{
		Error:   false,
		Message: "Hit the broker",
		Data:    auth,
	}
	fmt.Printf("Auth credentials: %+v", auth)
	_ = app.writeJSON(w, http.StatusOK, payload)
}
