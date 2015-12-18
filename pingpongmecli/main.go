package main

import (
	"flag"
	"fmt"
	"io/ioutil"
	"net/http"
	"net/url"
	"os"
)

var serverbase string = "http://localhost:3000"

func get(name, location string) {
	Url, err := url.Parse(serverbase)
	if err != nil {
		fmt.Printf("Parse failed: %s", err)
		os.Exit(1)
	}

	Url.Path += "requestpair/"
	params := url.Values{}
	params.Add("name", name)
	params.Add("location", location)
	Url.RawQuery = params.Encode()
	response, err := http.Get(Url.String())

	if err != nil {
		fmt.Printf("Get failed: %s", err)
		os.Exit(1)
	} else {
		defer response.Body.Close()
		contents, err := ioutil.ReadAll(response.Body)
		if err != nil {
			fmt.Printf("Read content failed: %s", err)
			os.Exit(1)
		}
		fmt.Printf("%s\n", string(contents))
	}
}

func main() {
	if os.Getenv("PINGPONGMEURL") != "" {
		serverbase = os.Getenv("PINGPONGMEURL")
	}
	name := flag.String("name", "", "Define your name for your pair")
	location := flag.String("location", "", "Define the location you want to play")
	flag.Parse()
	get(*name, *location)
}
