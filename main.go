package main

import (
        "fmt"
        "io/ioutil"
        "log"
        "net/http"
)

func mesh(w http.ResponseWriter, req *http.Request) {
        body, _ := ioutil.ReadAll(req.Body)
        w.Header().Set("Content-Type", "application/json")
        fmt.Printf("%s", string(body))

        w.Write(body)
}

func main() {
        http.Handle("/", http.FileServer(http.Dir("public")))

        log.Fatal(http.ListenAndServe(":3000", nil))
}
