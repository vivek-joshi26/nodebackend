require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT||3001; // Change this to your desired port


// enabling CORS for some specific origins only. 
const corsOptions = { 
  credential:true,
  origin :['http://localhost:5500', 'https://emprraghu1.service-now.com']
} 

 
app.use(cors(corsOptions))
// app.use(authentication); 

app.all('/authenticated/*', authentication);

function authentication(req, res, next) {
  const authheader = req.headers.authorization;
  console.log(req.headers);

  if (!authheader) {
      let err = new Error('You are not authenticated!');
      res.setHeader('WWW-Authenticate', 'Basic');
      err.status = 401;
      return next(err)
  }

  const auth = new Buffer.from(authheader.split(' ')[1],
      'base64').toString().split(':');
  const user = auth[0];
  const pass = auth[1];

  if (user == 'admin' && pass == 'password') {

      // If Authorized user
      next();
  } else {
      let err = new Error('You are not authenticated!');
      res.setHeader('WWW-Authenticate', 'Basic');
      err.status = 401;
      return next(err);
  }

}

// let ALLOWED_ORIGINS = ["https://emprraghu1.service-now.com", "http://localhost:5500"];

// app.use((req,res,next) => {
//   let origin = req.headers.origin;
//   let theOrigin = (ALLOWED_ORIGINS.indexOf(origin) >= 0) ? origin : ALLOWED_ORIGINS[1];
//   res.header("Access-Control-Allow-Origin", theOrigin);
//   res.header("Access-Control-Allow-Methods", "GET");
//   res.header("Access-Control-Allow-Credentials", "true");
//   res.setHeader("Content-Type", "application/json");
//   res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers,Origin,Accept, X-Requested-With, Content-Type,Access-Control-Allow-Method,Access-Control-Allow-Headers,Authorization");
//   next();
  

// })


app.get('/', (req, res) => {
    res.json({ message: 'Backend App is up and running' });
})

app.get('/no-authentication', (req, res) => {
  res.json({ message: 'This is an Open API no authorization needed' });
})


app.get('/authenticated/check' ,(req, res) => {

  var data = {
    "collection": {
      "version": "1.0",
      "links": [],
      "items": [
        {
          "href": "https://conferenceapi.azurewebsites.net/topic/1",
          "data": [
            {
              "name": "Title",
              "value": "Agile"
            }
          ],
          "links": [
            {
              "rel": "http://tavis.net/rels/sessions",
              "href": "https://conferenceapi.azurewebsites.net/topic/1/sessions"
            }
          ]
        },
        {
          "href": "https://conferenceapi.azurewebsites.net/topic/2",
          "data": [
            {
              "name": "Title",
              "value": "Architecture"
            }
          ],
          "links": [
            {
              "rel": "http://tavis.net/rels/sessions",
              "href": "https://conferenceapi.azurewebsites.net/topic/2/sessions"
            }
          ]
        },
        {
          "href": "https://conferenceapi.azurewebsites.net/topic/3",
          "data": [
            {
              "name": "Title",
              "value": "Cloud"
            }
          ],
          "links": [
            {
              "rel": "http://tavis.net/rels/sessions",
              "href": "https://conferenceapi.azurewebsites.net/topic/3/sessions"
            }
          ]
        },
        {
          "href": "https://conferenceapi.azurewebsites.net/topic/4",
          "data": [
            {
              "name": "Title",
              "value": "Database"
            }
          ],
          "links": [
            {
              "rel": "http://tavis.net/rels/sessions",
              "href": "https://conferenceapi.azurewebsites.net/topic/4/sessions"
            }
          ]
        },
        {
          "href": "https://conferenceapi.azurewebsites.net/topic/5",
          "data": [
            {
              "name": "Title",
              "value": "Design"
            }
          ],
          "links": [
            {
              "rel": "http://tavis.net/rels/sessions",
              "href": "https://conferenceapi.azurewebsites.net/topic/5/sessions"
            }
          ]
        },
        {
          "href": "https://conferenceapi.azurewebsites.net/topic/6",
          "data": [
            {
              "name": "Title",
              "value": "Devops"
            }
          ],
          "links": [
            {
              "rel": "http://tavis.net/rels/sessions",
              "href": "https://conferenceapi.azurewebsites.net/topic/6/sessions"
            }
          ]
        },
        {
          "href": "https://conferenceapi.azurewebsites.net/topic/7",
          "data": [
            {
              "name": "Title",
              "value": "Fun"
            }
          ],
          "links": [
            {
              "rel": "http://tavis.net/rels/sessions",
              "href": "https://conferenceapi.azurewebsites.net/topic/7/sessions"
            }
          ]
        },
        {
          "href": "https://conferenceapi.azurewebsites.net/topic/8",
          "data": [
            {
              "name": "Title",
              "value": "Microsoft"
            }
          ],
          "links": [
            {
              "rel": "http://tavis.net/rels/sessions",
              "href": "https://conferenceapi.azurewebsites.net/topic/8/sessions"
            }
          ]
        },
        {
          "href": "https://conferenceapi.azurewebsites.net/topic/9",
          "data": [
            {
              "name": "Title",
              "value": "Misc"
            }
          ],
          "links": [
            {
              "rel": "http://tavis.net/rels/sessions",
              "href": "https://conferenceapi.azurewebsites.net/topic/9/sessions"
            }
          ]
        },
        {
          "href": "https://conferenceapi.azurewebsites.net/topic/10",
          "data": [
            {
              "name": "Title",
              "value": "Mobile"
            }
          ],
          "links": [
            {
              "rel": "http://tavis.net/rels/sessions",
              "href": "https://conferenceapi.azurewebsites.net/topic/10/sessions"
            }
          ]
        },
        {
          "href": "https://conferenceapi.azurewebsites.net/topic/11",
          "data": [
            {
              "name": "Title",
              "value": "Programming Languages"
            }
          ],
          "links": [
            {
              "rel": "http://tavis.net/rels/sessions",
              "href": "https://conferenceapi.azurewebsites.net/topic/11/sessions"
            }
          ]
        },
        {
          "href": "https://conferenceapi.azurewebsites.net/topic/12",
          "data": [
            {
              "name": "Title",
              "value": "Security"
            }
          ],
          "links": [
            {
              "rel": "http://tavis.net/rels/sessions",
              "href": "https://conferenceapi.azurewebsites.net/topic/12/sessions"
            }
          ]
        },
        {
          "href": "https://conferenceapi.azurewebsites.net/topic/13",
          "data": [
            {
              "name": "Title",
              "value": "Techniques"
            }
          ],
          "links": [
            {
              "rel": "http://tavis.net/rels/sessions",
              "href": "https://conferenceapi.azurewebsites.net/topic/13/sessions"
            }
          ]
        },
        {
          "href": "https://conferenceapi.azurewebsites.net/topic/14",
          "data": [
            {
              "name": "Title",
              "value": "Testing"
            }
          ],
          "links": [
            {
              "rel": "http://tavis.net/rels/sessions",
              "href": "https://conferenceapi.azurewebsites.net/topic/14/sessions"
            }
          ]
        },
        {
          "href": "https://conferenceapi.azurewebsites.net/topic/15",
          "data": [
            {
              "name": "Title",
              "value": "Tools"
            }
          ],
          "links": [
            {
              "rel": "http://tavis.net/rels/sessions",
              "href": "https://conferenceapi.azurewebsites.net/topic/15/sessions"
            }
          ]
        },
        {
          "href": "https://conferenceapi.azurewebsites.net/topic/16",
          "data": [
            {
              "name": "Title",
              "value": "UX"
            }
          ],
          "links": [
            {
              "rel": "http://tavis.net/rels/sessions",
              "href": "https://conferenceapi.azurewebsites.net/topic/16/sessions"
            }
          ]
        },
        {
          "href": "https://conferenceapi.azurewebsites.net/topic/17",
          "data": [
            {
              "name": "Title",
              "value": "Web"
            }
          ],
          "links": [
            {
              "rel": "http://tavis.net/rels/sessions",
              "href": "https://conferenceapi.azurewebsites.net/topic/17/sessions"
            }
          ]
        }
      ],
      "queries": [],
      "template": {
        "data": []
      }
    }
  };
  res.json({ data: data });
})

app.get('/authenticated/local' ,(req, res) => {

  var data = {
    "collection": {
      "version": "1.0",
      "links": [],
      "items": [
        {
          "href": "https://conferenceapi.azurewebsites.net/topic/1",
          "data": [
            {
              "name": "Title",
              "value": "Agile"
            }
          ],
          "links": [
            {
              "rel": "http://tavis.net/rels/sessions",
              "href": "https://conferenceapi.azurewebsites.net/topic/1/sessions"
            }
          ]
        },
        {
          "href": "https://conferenceapi.azurewebsites.net/topic/2",
          "data": [
            {
              "name": "Title",
              "value": "Architecture"
            }
          ],
          "links": [
            {
              "rel": "http://tavis.net/rels/sessions",
              "href": "https://conferenceapi.azurewebsites.net/topic/2/sessions"
            }
          ]
        },
        {
          "href": "https://conferenceapi.azurewebsites.net/topic/3",
          "data": [
            {
              "name": "Title",
              "value": "Cloud"
            }
          ],
          "links": [
            {
              "rel": "http://tavis.net/rels/sessions",
              "href": "https://conferenceapi.azurewebsites.net/topic/3/sessions"
            }
          ]
        },
        {
          "href": "https://conferenceapi.azurewebsites.net/topic/4",
          "data": [
            {
              "name": "Title",
              "value": "Database"
            }
          ],
          "links": [
            {
              "rel": "http://tavis.net/rels/sessions",
              "href": "https://conferenceapi.azurewebsites.net/topic/4/sessions"
            }
          ]
        },
        {
          "href": "https://conferenceapi.azurewebsites.net/topic/5",
          "data": [
            {
              "name": "Title",
              "value": "Design"
            }
          ],
          "links": [
            {
              "rel": "http://tavis.net/rels/sessions",
              "href": "https://conferenceapi.azurewebsites.net/topic/5/sessions"
            }
          ]
        },
        {
          "href": "https://conferenceapi.azurewebsites.net/topic/6",
          "data": [
            {
              "name": "Title",
              "value": "Devops"
            }
          ],
          "links": [
            {
              "rel": "http://tavis.net/rels/sessions",
              "href": "https://conferenceapi.azurewebsites.net/topic/6/sessions"
            }
          ]
        },
        {
          "href": "https://conferenceapi.azurewebsites.net/topic/7",
          "data": [
            {
              "name": "Title",
              "value": "Fun"
            }
          ],
          "links": [
            {
              "rel": "http://tavis.net/rels/sessions",
              "href": "https://conferenceapi.azurewebsites.net/topic/7/sessions"
            }
          ]
        },
        {
          "href": "https://conferenceapi.azurewebsites.net/topic/8",
          "data": [
            {
              "name": "Title",
              "value": "Microsoft"
            }
          ],
          "links": [
            {
              "rel": "http://tavis.net/rels/sessions",
              "href": "https://conferenceapi.azurewebsites.net/topic/8/sessions"
            }
          ]
        },
        {
          "href": "https://conferenceapi.azurewebsites.net/topic/9",
          "data": [
            {
              "name": "Title",
              "value": "Misc"
            }
          ],
          "links": [
            {
              "rel": "http://tavis.net/rels/sessions",
              "href": "https://conferenceapi.azurewebsites.net/topic/9/sessions"
            }
          ]
        },
        {
          "href": "https://conferenceapi.azurewebsites.net/topic/10",
          "data": [
            {
              "name": "Title",
              "value": "Mobile"
            }
          ],
          "links": [
            {
              "rel": "http://tavis.net/rels/sessions",
              "href": "https://conferenceapi.azurewebsites.net/topic/10/sessions"
            }
          ]
        },
        {
          "href": "https://conferenceapi.azurewebsites.net/topic/11",
          "data": [
            {
              "name": "Title",
              "value": "Programming Languages"
            }
          ],
          "links": [
            {
              "rel": "http://tavis.net/rels/sessions",
              "href": "https://conferenceapi.azurewebsites.net/topic/11/sessions"
            }
          ]
        },
        {
          "href": "https://conferenceapi.azurewebsites.net/topic/12",
          "data": [
            {
              "name": "Title",
              "value": "Security"
            }
          ],
          "links": [
            {
              "rel": "http://tavis.net/rels/sessions",
              "href": "https://conferenceapi.azurewebsites.net/topic/12/sessions"
            }
          ]
        },
        {
          "href": "https://conferenceapi.azurewebsites.net/topic/13",
          "data": [
            {
              "name": "Title",
              "value": "Techniques"
            }
          ],
          "links": [
            {
              "rel": "http://tavis.net/rels/sessions",
              "href": "https://conferenceapi.azurewebsites.net/topic/13/sessions"
            }
          ]
        },
        {
          "href": "https://conferenceapi.azurewebsites.net/topic/14",
          "data": [
            {
              "name": "Title",
              "value": "Testing"
            }
          ],
          "links": [
            {
              "rel": "http://tavis.net/rels/sessions",
              "href": "https://conferenceapi.azurewebsites.net/topic/14/sessions"
            }
          ]
        },
        {
          "href": "https://conferenceapi.azurewebsites.net/topic/15",
          "data": [
            {
              "name": "Title",
              "value": "Tools"
            }
          ],
          "links": [
            {
              "rel": "http://tavis.net/rels/sessions",
              "href": "https://conferenceapi.azurewebsites.net/topic/15/sessions"
            }
          ]
        },
        {
          "href": "https://conferenceapi.azurewebsites.net/topic/16",
          "data": [
            {
              "name": "Title",
              "value": "UX"
            }
          ],
          "links": [
            {
              "rel": "http://tavis.net/rels/sessions",
              "href": "https://conferenceapi.azurewebsites.net/topic/16/sessions"
            }
          ]
        },
        {
          "href": "https://conferenceapi.azurewebsites.net/topic/17",
          "data": [
            {
              "name": "Title",
              "value": "Web"
            }
          ],
          "links": [
            {
              "rel": "http://tavis.net/rels/sessions",
              "href": "https://conferenceapi.azurewebsites.net/topic/17/sessions"
            }
          ]
        }
      ],
      "queries": [],
      "template": {
        "data": []
      }
    }
  };
  res.json({ data: data });
})

app.get('/authenticated/instance' ,(req, res) => {

  var data = {
    "collection": {
      "version": "1.0",
      "links": [],
      "items": [
        {
          "href": "https://conferenceapi.azurewebsites.net/topic/1",
          "data": [
            {
              "name": "Title",
              "value": "Agile"
            }
          ],
          "links": [
            {
              "rel": "http://tavis.net/rels/sessions",
              "href": "https://conferenceapi.azurewebsites.net/topic/1/sessions"
            }
          ]
        },
        {
          "href": "https://conferenceapi.azurewebsites.net/topic/2",
          "data": [
            {
              "name": "Title",
              "value": "Architecture"
            }
          ],
          "links": [
            {
              "rel": "http://tavis.net/rels/sessions",
              "href": "https://conferenceapi.azurewebsites.net/topic/2/sessions"
            }
          ]
        },
        {
          "href": "https://conferenceapi.azurewebsites.net/topic/3",
          "data": [
            {
              "name": "Title",
              "value": "Cloud"
            }
          ],
          "links": [
            {
              "rel": "http://tavis.net/rels/sessions",
              "href": "https://conferenceapi.azurewebsites.net/topic/3/sessions"
            }
          ]
        },
        {
          "href": "https://conferenceapi.azurewebsites.net/topic/4",
          "data": [
            {
              "name": "Title",
              "value": "Database"
            }
          ],
          "links": [
            {
              "rel": "http://tavis.net/rels/sessions",
              "href": "https://conferenceapi.azurewebsites.net/topic/4/sessions"
            }
          ]
        },
        {
          "href": "https://conferenceapi.azurewebsites.net/topic/5",
          "data": [
            {
              "name": "Title",
              "value": "Design"
            }
          ],
          "links": [
            {
              "rel": "http://tavis.net/rels/sessions",
              "href": "https://conferenceapi.azurewebsites.net/topic/5/sessions"
            }
          ]
        },
        {
          "href": "https://conferenceapi.azurewebsites.net/topic/6",
          "data": [
            {
              "name": "Title",
              "value": "Devops"
            }
          ],
          "links": [
            {
              "rel": "http://tavis.net/rels/sessions",
              "href": "https://conferenceapi.azurewebsites.net/topic/6/sessions"
            }
          ]
        },
        {
          "href": "https://conferenceapi.azurewebsites.net/topic/7",
          "data": [
            {
              "name": "Title",
              "value": "Fun"
            }
          ],
          "links": [
            {
              "rel": "http://tavis.net/rels/sessions",
              "href": "https://conferenceapi.azurewebsites.net/topic/7/sessions"
            }
          ]
        },
        {
          "href": "https://conferenceapi.azurewebsites.net/topic/8",
          "data": [
            {
              "name": "Title",
              "value": "Microsoft"
            }
          ],
          "links": [
            {
              "rel": "http://tavis.net/rels/sessions",
              "href": "https://conferenceapi.azurewebsites.net/topic/8/sessions"
            }
          ]
        },
        {
          "href": "https://conferenceapi.azurewebsites.net/topic/9",
          "data": [
            {
              "name": "Title",
              "value": "Misc"
            }
          ],
          "links": [
            {
              "rel": "http://tavis.net/rels/sessions",
              "href": "https://conferenceapi.azurewebsites.net/topic/9/sessions"
            }
          ]
        },
        {
          "href": "https://conferenceapi.azurewebsites.net/topic/10",
          "data": [
            {
              "name": "Title",
              "value": "Mobile"
            }
          ],
          "links": [
            {
              "rel": "http://tavis.net/rels/sessions",
              "href": "https://conferenceapi.azurewebsites.net/topic/10/sessions"
            }
          ]
        },
        {
          "href": "https://conferenceapi.azurewebsites.net/topic/11",
          "data": [
            {
              "name": "Title",
              "value": "Programming Languages"
            }
          ],
          "links": [
            {
              "rel": "http://tavis.net/rels/sessions",
              "href": "https://conferenceapi.azurewebsites.net/topic/11/sessions"
            }
          ]
        },
        {
          "href": "https://conferenceapi.azurewebsites.net/topic/12",
          "data": [
            {
              "name": "Title",
              "value": "Security"
            }
          ],
          "links": [
            {
              "rel": "http://tavis.net/rels/sessions",
              "href": "https://conferenceapi.azurewebsites.net/topic/12/sessions"
            }
          ]
        },
        {
          "href": "https://conferenceapi.azurewebsites.net/topic/13",
          "data": [
            {
              "name": "Title",
              "value": "Techniques"
            }
          ],
          "links": [
            {
              "rel": "http://tavis.net/rels/sessions",
              "href": "https://conferenceapi.azurewebsites.net/topic/13/sessions"
            }
          ]
        },
        {
          "href": "https://conferenceapi.azurewebsites.net/topic/14",
          "data": [
            {
              "name": "Title",
              "value": "Testing"
            }
          ],
          "links": [
            {
              "rel": "http://tavis.net/rels/sessions",
              "href": "https://conferenceapi.azurewebsites.net/topic/14/sessions"
            }
          ]
        },
        {
          "href": "https://conferenceapi.azurewebsites.net/topic/15",
          "data": [
            {
              "name": "Title",
              "value": "Tools"
            }
          ],
          "links": [
            {
              "rel": "http://tavis.net/rels/sessions",
              "href": "https://conferenceapi.azurewebsites.net/topic/15/sessions"
            }
          ]
        },
        {
          "href": "https://conferenceapi.azurewebsites.net/topic/16",
          "data": [
            {
              "name": "Title",
              "value": "UX"
            }
          ],
          "links": [
            {
              "rel": "http://tavis.net/rels/sessions",
              "href": "https://conferenceapi.azurewebsites.net/topic/16/sessions"
            }
          ]
        },
        {
          "href": "https://conferenceapi.azurewebsites.net/topic/17",
          "data": [
            {
              "name": "Title",
              "value": "Web"
            }
          ],
          "links": [
            {
              "rel": "http://tavis.net/rels/sessions",
              "href": "https://conferenceapi.azurewebsites.net/topic/17/sessions"
            }
          ]
        }
      ],
      "queries": [],
      "template": {
        "data": []
      }
    }
  };
  res.json({ data: data });
})



app.listen(port, () =>{
  console.log('BACKEND RUNNING ON PORT: ' , port);
})