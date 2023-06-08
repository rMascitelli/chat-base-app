package main

import (
	_ "github.com/lib/pq"
	"github.com/rMascitelli/chat-base-app/data"
)

const webPort = "80"

// func main() {
// 	app := Config{}

// 	log.Printf("Starting back-end service on port %s", webPort)

// 	// define http server
// 	srv := &http.Server{
// 		Addr:    fmt.Sprintf(":%s", webPort),
// 		Handler: app.routes(),
// 	}

// 	// start the server
// 	err := srv.ListenAndServe()
// 	if err != nil {
// 		log.Panic(err)
// 	}
// }

func main() {
	var u data.UserInfo
	u.SelectAll()
}
