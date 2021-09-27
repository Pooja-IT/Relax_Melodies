export default function Register(props) {
  function handleSubmit(){
    console.log("submit");
  }
  return (
    <div>
      <form onClick={handleSubmit} >
        <div>
          <label for="name"><b>First Name:</b></label>
          <input name="name" type="name" id="name" />
        </div>
        <div>
          <label for="number"><b>Number:</b></label>
          <input name="number" type="name" id="name" />
        </div>
        <div>
          <label for="email"><b>Email:</b></label>
          <input name="email" type="email" id="email"
          />
        </div>
        <div>
          <label for="password"><b>Password:</b></label>
          <input name="password" type="password"  id="password"
          />
        </div>
        <input type="submit" value="Register" />
      </form>
    </div>
  )
};