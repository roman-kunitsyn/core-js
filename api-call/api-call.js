"use strict";

apiServise({ url: "./data.json", method: "GET" });
apiServise({ url: "/auth/registration", method: "POST" });
apiServise({ url: "/auth/login", method: "POST" });
apiServise({ url: "/auth/logout", method: "POST" });

apiServise({ url: "/api/data/list", method: "GET" });
apiServise({ url: "/api/data", method: "POST" });
apiServise({ url: "/api/data/:id", method: "GET" });
apiServise({ url: "/api/data/:id", method: "DELETE" });
apiServise({ url: "/api/data/:id", method: "PUT" });

function apiServise(call) {
  return fetch(call.url, { method: call.method })
    .then(response => {
      console.log(response);
      return response.text();
    })
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.error(err);
    });
}
