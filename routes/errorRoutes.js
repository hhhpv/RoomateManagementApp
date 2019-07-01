//Require Modules
const express=require('express');
const router=express.Router();

//handle error exports
exports.getError=(req,res,next)=>{
res.end(("{\"result\":\"Seems like you have taken a wrong path here!\"}"));
};