# back-end
This repository will serve as the back-end server side for the application

# routes
# /students 
retruns an array of objects with all of the information on the student table and the school tables the object will look like this: {"id":1,"username":"bobthebuilder","firstName":"Robert","lastName":"Builder","age":12,"school_id":1,"password":"password","schoolName":"Bayside Elementry","address":"1322 13th street"} 
# /students/:id
returns an object with all of the info on the selected student including the school info threads they have authored and bubl's they they have posted to the objects look like this: {"id":2,"username":"bobthebuilder","firstName":"Robert","lastName":"Builder","age":12,"school_id":1,"password":"password","schoolName":"Bayside Elementry","address":"1322 13th street","title":"what is 1 + 1","bubl_id":2,"student_id":1,"bublName":"math"}
# /threads 
when using a get request this route will return an array of all thread objects.
when using a post request  you must use an object that looks like this {
    title: 'string ',
    bubl_id: int,
    student_id: int 
}
# /threads/:id
searchs for a thread with the specified id and returns a thread object if one is found in the data base
# 