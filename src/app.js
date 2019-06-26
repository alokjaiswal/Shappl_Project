const path=require('path')
const express=require('express')
const hbs=require('hbs')


const app=express()

//setting up publicDirectory
const publicDirectory=path.join(__dirname,'../public')
const viewspath=path.join(__dirname,'../templates/views')
const partialPath=path.join(__dirname,'../templates/partials')
//setting up handle handlenbars

app.use(express.static(publicDirectory))
app.set('views',viewspath)
app.set('view engine','hbs')
hbs.registerPartials(partialPath)
//getting user requests
app.get('',(req,res)=>{
  res.render('index')

})
app.get('/blogs',(req,res)=>{
  res.render('blogs')
})
app.get('/about',(req,res)=>{
  res.render('about',{
    name:'abhishek'
  })
})
app.get('/previouspapers',(req,res)=>{
  res.render('papers')
  })
app.get('/MentorProgram',(req,res)=>{
  res.render('special_mentor_program')
})
app.get('/studymaterials',(req,res)=>{
  res.render('study_material')
})
app.get('*',(req,res)=>{
  res.render('404')
})

app.listen(3000,()=>{
  console.log("Enjoy port is active")
})
