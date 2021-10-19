
import React from "react";



const fetch = require("node-fetch")

const getJSON = uri => fetch(uri).then(response => response.json())

exports.createPages = async function ({ actions, graphql }) {
  const [pokemonData, rickAndMortyData] = await Promise.all([
    getJSON("https://some-rest-api.com/pokemon"),
    getJSON("https://some-rest-api.com/rick-and-morty"),
  ])


  // use data to create pages with actions.createPage
};



const Blog = () =>(

    console.log(getJSON)
);
export default Blog;