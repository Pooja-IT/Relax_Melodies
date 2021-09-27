export default function Login(props) {
  function handleSubmit(){
    console.log("submit");
  }
  return (
    <form name='name' onClick={handleSubmit()}>
      <div >
        <label for="email"><b>Email:</b></label>
        <input name="email" type="text" id="username" />
      </div>
      <div >
        <label for="password"><b>Password:</b></label>
        <input name="password" type="password" className="form-control" id="password" />
      </div>
      <input type="submit" value="Log In" />
    </form>
        )
  };