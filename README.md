# Node inversify express typescript

- simple setup for a node express using inversify for dependency is used
- Exposes REST api using express framework


# Installation

- Clone the repo  git clone https://github.com/devsid2404/node_inversify_express_ts.git
- Install node in the system using nvm or directly
- Node version v14+ preferred
- Run the command npm ci the root folder of the project
- To run the application run => npm run dev

# Unit test case

- Run unit test case using command => npm run test

# Kodo feature

- Run the application using npm run dev
- to test the feature 
- use the query params => 
    * "name" & "description" to filter => default value null
    * "start" & "limit" for pagination => default value 0 & 10
    * "sortBy" to sort ascending or descending default value null
    * can sort descending using '-' before parameter name eg. sortBy=-name

 - curl request => curl -X GET \
  'http://localhost:8000/api/posts?name=sid&description=lord something&start=1&limit=20&sortBy=name' \
  --header 'Accept: */*' \
  --header 'User-Agent: Thunder Client (https://www.thunderclient.com)'

