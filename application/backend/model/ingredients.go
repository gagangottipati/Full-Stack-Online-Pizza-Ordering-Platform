package model

type Ingredients struct {
	Image string `json:"Image,omitempty"`
	Tname  string `json:"tname,omitempty"`
	Price int    `json:"price,omitempty"`
}