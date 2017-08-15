var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles ={
    "article-one" :{
    title:'ARTICLE ONE | SHWETA BHOIR',
    date:'5 th sep,2017',
    heading:'ARTICLE-ONE',
    content:`
    <p>
        this is my content for article two.this is my content for article two.this is my content for article two.this is my content for article two.this is my content for article two.
        </p>
         <p>
        this is my content for article two.this is my content for article two.this is my content for article two.this is my content for article two.this is my content for article two.
        </p>
         <p>
        this is my content for article two.this is my content for article two.this is my content for article two.this is my content for article two.this is my content for article two.
    
    `
    },
    "article-two" :{
        title:'ARTICLE two | SHWETA BHOIR',
    date:'25 th sep,2017',
    heading:'ARTICLE-ONE',
    content:`
    <p>
        this is my content for article two.this is my content for article two.this is my content for article two.this is my content for article two.this is my content for article two.
        </p>
         
    
    `
    },
    "article-three" :{
        
        title:'ARTICLE three | SHWETA BHOIR',
    date:'5 th sep,2017',
    heading:'ARTICLE-ONE',
    content:`
    <p>
       THIS IS CONTENT FOR ARTICLE THREE
       </p>
    
    `
    }
};
    
    
};
function createTemplate(data)
{
 var title = data.title;
 var date = data.date;
 var heading = data.heading;
 var content = data.content;
 

var htmlTemplate =
`<html>
    <head>
        <title>${title}</title>
        <meta name="viewport" content="width-device-width,initial scale=1">
        <link href="/ui/style.css" rel="stylesheet" />
       
        </head>
<body>
    <div class="container">
        <div>
        <a href="/">home</a> 
    </div>
    <hr/>
    <h3>${heading} </h3>
    <div>${date}</div>
   
    <div>
        ${content}
    </div>
</div>
</body>    
</html>
`;
    return htmlTemplate;
}
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui' , 'index.html'));
  
});



app.get('/:articleName',function(req,res)
{
    res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
    
});
app.get('/article-two',function(req,res)
{
    var articleName = req.parames.articleName;
     res.send(createTemplate(articles[articleName]));
    
});
app.get('/article-three',function(req,res)
{
     res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
    
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
