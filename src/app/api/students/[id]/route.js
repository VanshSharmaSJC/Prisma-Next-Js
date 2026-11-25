export async function GET(request, { params }) {
    const { id } = params;
    const student = students.find(student => student.id === parseInt(id));

    if (!student) {
        return new Response(JSON.stringify({ message: 'Student not found' }), { status: 404 });
    }
 return new Response(JSON.stringify(student), { status: 200 });
}


export async function PUT(request, { params }) {
    const data = await request.json();
    const { id } = params;
    const studentIndex = students.findIndex(student => student.id === parseInt(id));

    if (studentIndex === -1) {
        return new Response(JSON.stringify({ message: 'Student not found' }), { status: 404 });
    }

    students[studentIndex].name = data.name;
    students[studentIndex].email = data.email;
    students[studentIndex].course = data.course;

    return new Response(JSON.stringify(students[studentIndex]), { status: 200 }) ;
}


export async function DELETE(request, { params }) {
    const { id } = params;
    const studentIndex = students.findIndex(student => student.id === parseInt(id));
    if (studentIndex === -1) {
        return new Response(JSON.stringify({ message: 'Student not found' }), { status: 404 });
    }
    const deletedStudent = students.splice(studentIndex, 1);
    return new Response(JSON.stringify(deletedStudent[0]), { status: 200 });
}   


