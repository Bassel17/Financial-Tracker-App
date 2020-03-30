import React from "react";
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class ChartsPage extends React.Component {
  state = {
    dataBar: {
      labels: ["categories", "Groceries","Travel"],
      datasets: [
        {
          label: ["Positive"] ,
          data: [20, 15,18],
          backgroundColor: ["#28a745", "#dc3545", "#28a745"]
        }
      ],
      
    },
    barChartOptions: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            barPercentage: 0.5,
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)"
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)"
            },
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }

   
  
  }

  render() {
    if(this.props.index === 0){
    return (
      <MDBContainer>
        <h3 className="mt-5 text-light">
         
        </h3>
        <Bar data={this.state.dataBar} options={this.state.barChartOptions} />
      </MDBContainer>
    );
  }
  

}
}




export default ChartsPage;
