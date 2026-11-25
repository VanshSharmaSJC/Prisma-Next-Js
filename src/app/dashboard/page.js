export default function Dashboard() {
  const cookieStore = cookies();
  const role = cookieStore.get('role')?.value;

  if(!token) {
    redirect("/login");
  }
  try{
    const decodedToken = verifyJwt(token, process.env.SECRET);
    if(decodedToken.role !== "admin") {
      redirect("/login?error=Unauthorized");
    
  }

  


 return (
    <main>
      <h1>Dashboard</h1>
      <p>Welcome, {decodedToken.username}!</p>
      <p>Your role is: {decodedToken.role}</p>
    </main>
  );
  }catch(error) {
  redirect("/login?error=Invalid token");
}




}