import React,{Component} from 'react'
import './App.css'
import "./Components/Styles.css"
import {data} from './Components/data'

// function App(){
//   return (
//     <div className="App">
//       <CrudApp />
//       <Home/>
//     </div>
//   )
// }



// export default App


class App extends Component{
  constructor() {
    super();
    this.state = {
      information:data,
      title: "React Saimple CRUD Appliction",
      act: 0,
      index:''
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // consol`e.log('try')
    let employeesData = this.state.information;
    let Id = this.refs.id.value;
    let name = this.refs.name.value;
    let Email = this.refs.email.value;
    let age = this.refs.Age.value;
    let Mobile = this.refs.mobileNum.value;
    let Address = this.refs.Address.value;

    if (this.state.act === 0) {
      let newEmployeData = {
        'id': Id,
        'name': name,
        'age': age,
        'mobile': Mobile,
        'email': Email,
        'address':Address
      }
      employeesData.push(newEmployeData);
    }
    else {
      let index = this.state.index;
      employeesData[index].Id = Id;
      employeesData[index].name = name;
      employeesData[index].email = Email;
      employeesData[index].Age = age;
      employeesData[index].Mobile = Mobile;
      employeesData[index].Address = Address;
    }
    this.setState({
      employeesData: employeesData,
      act: 0,
    })
    this.refs.myform.reset();
    
  }

  handleEdit = (i) => {
    let employeesData = this.state.employeesData[i];
    this.refs.id.value = employeesData.id;
    this.refs.name.value = employeesData.name;
    this.refs.email.value = employeesData.email;
    this.refs.Age.value = employeesData.age;
    this.refs.mobileNum.value = employeesData.mobile;
    this.refs.Address.value = employeesData.address;

    this.setState({
      employeesData: employeesData,
      act: 1,
      index:i
    })
  }


  handleDelete = (i) => {
    let employeesData = this.state.employeesData;
    employeesData.splice(i,1);
    this.setState({
      employeesData:employeesData
    })
  }


  render() {
    let employeesData = this.state.information;
    // console.log(Address);
    return (<div className="App">
      <h1 className="head">{this.state.title}</h1>
      <form  ref="myform" className="myforms">
        <label>User  Id : </label>
        <input type='text' ref='id' placeholder='User  id' className="formfield"/>
        <label>User  Name : </label>
        <input type='String' ref='name' placeholder='User  Name' className="formfield" />
        <label> Email  Id : </label>
        <input type='text' ref='email' placeholder='User  Email' className="formfield"/>
        <label>   Age  :  <input type='Number' ref='Age' placeholder='Age' /></label>
        
        <label>Mobile Number  : </label>
        <input type='Number' ref='mobileNum' placeholder='Mobile Number'className="formfield" />
        <label>Address  : </label>
        <input type='object' ref='Address' placeholder='Address' className="formfield"/>
        
        <button onClick={e => this.handleSubmit(e)} className="myButton">submit</button>
      </form>
      <table>
        <thead>
        <tr className="tableHead">
          <th>Id  </th>
          <th>Name</th>
          <th>Email Id</th>
          <th>Age  </th>
          <th>Mobile number</th>
            <th>Adrees</th>
            <th>Apply </th>
            <th>action</th>
            {/* <th>Delete</th> */}
        </tr>
        </thead>
        
        {
          employeesData.map((data, i) => (
            <tbody className="tbody">
              <tr key={i}>
              <td>{data. id}</td>
              <td>{data.name}</td>
              <td>{data.email }</td>
                <td>{data.age}</td>
                <td>{ data.mobile}</td>
                <td>
                  <ul>
                    <li>{data.address.city}</li>
                    <li>{data.address.line1}</li>
                    <li>{data.address.line2}</li>
                    <li>{data.address.pincode}</li>
                  </ul>
                </td>
                <td>
                  <button onClick={e=>this.handleEdit(i)} className="myButton1">edit</button></td>
                <td><button onClick={e => this.handleDelete(i)} className="myButton1">Delete</button></td>
              {/* <td>{data.address }</td> */}
              </tr>
          
          
            </tbody>
          )
          )
        }
      </table>
    </div>)
  }
}
export default App;
