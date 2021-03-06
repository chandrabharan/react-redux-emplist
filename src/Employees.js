import React from "react";
import { connect } from "react-redux";

class Employee extends React.Component {
  componentDidMount(){
    if(!this.props.employees){
      this.props.history.push('/');
    }
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.employees.user.map(employee => {
            return (
              <div
                className="panel panel-info col-sm-4 col-md-4 col-lg-4"
                key={employee.id}
              >
                <div className="panel-heading">Employee {employee.id}</div>
                <div className=".panel-body-custom">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="184.64 83.41 389.16 433.07"
                  >
                    <defs>
                      <g fill="#61DAFB">
                        <path
                          id="a"
                          d="M466 511.997H46c-25.375 0-46-20.625-46-46l1.563-36.875c38.313-80.688 97.688-97.844 100.188-98.563l4.25-.563h30c24.25 0 44-19.75 44-44V271.73c-11.875-15.25-20.688-31.766-26.281-49.188l-1.125-3.594c-18.281-16.609-22.844-43.563-11.281-64.531.313-.703 1.156-2.078 2.125-3.516l-.094-17.203c-.031-11.547-.031-23.063.125-34.578.906-21.891 6.844-41.203 17.156-56.297 12.188-18.234 32.563-32.125 55.813-38 22.75-5.781 47.781-6.375 72.219-1.719 21.875 4.172 40.625 13.922 54.156 28.219 16 16.906 25.156 41.641 25.781 69.656.094 12.594.063 24.969.063 37.344l-.031 12.688c.469.672.813 1.281 1.156 1.891 12.094 19.281 8.906 47-7.813 63.719l-2.625 2.422c-6.563 20.781-15.656 38.282-27.344 53.329v13.625c0 24.25 19.75 44 44 44l34.25.563c2.5.719 61.875 17.875 100.188 98.563l1.563 6.875v30C512 491.372 491.375 511.997 466 511.997zM32 439.653v26.344c0 7.719 6.281 14 14 14h420c7.719 0 14-6.281 14-14v-26.344c-28.531-57.656-67.844-74.531-76.531-77.656H376c-41.906 0-76-34.094-76-76v-25.141l3.75-4.469c11.406-13.531 20.031-29.844 25.656-48.453 1-6.188 6.281-10.734 8.813-12.906 7.375-7.297 8.656-18.438 4-25.906-2.219-3.203-5.938-8.391-5.563-15.766v-15.078c0-12.281.031-24.563-.063-36.828-.438-19.828-6.5-37-17.031-48.125-11.219-11.859-26.25-16.766-36.906-18.781-19.906-3.828-40.094-3.344-58.375 1.297-15.688 3.969-29.219 13.031-37.156 24.891-7 10.281-11 23.828-11.688 39.297-.125 10.906-.125 22.25-.094 33.609v19.578c.875 6.469-3.188 12.391-5.156 15.234-5.281 9.469-3.156 21.094 3.813 26.813 6.25 4.281 8.469 11.75 9.656 15.766 5.406 17 13.531 31.5 24.625 44.797l3.719 4.469v25.703c0 41.906-34.094 76-76 76h-27.469C99.75 365.153 60.5 381.997 32 439.653z"
                        />
                      </g>
                    </defs>
                    <use
                      xlinkHref="#a"
                      fillOpacity="0"
                      stroke="#000"
                      className="v3"
                    />
                  </svg>
                  <div className="row"><p className='col-sm-12 col-md-12 col-lg-12'>Name : {employee.name}</p></div>
                  <div className="row"><p className='col-sm-12 col-md-12 col-lg-12'>Age : {employee.age}</p></div>
                  <div className="row"><p className='col-sm-12 col-md-12 col-lg-12'>Gender: {employee.gender}</p></div>
                  <div className="row"><p className='col-sm-12 col-md-12 col-lg-12'>Email : {employee.email}</p></div>
                  <div className="row"><p className='col-sm-12 col-md-12 col-lg-12'>Phone : {employee.phoneNo}</p></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    employees: state.employees
  };
}

const connectedStateToProps = connect(mapStateToProps);
export default connectedStateToProps(Employee);
