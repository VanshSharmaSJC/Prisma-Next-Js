
let students = [
    {"id":1,"name":"Vansh","Year":2026},
    {"id":2,"name":"Arun","Year":2026},
    {"id":3,"name":"shakalaka","Year":2026},
]

export function GET(){
    return Response.json(students);
}


export async function POST(request){
 const body = await request.json();
 const newStudent = {
    id: students.length+1,
    name: body.name,
    email: body.email,
    course: body.course
 }
 students.push(newStudent);
 return Response.json(newStudent,status=201);
}