import React from "react";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import { View } from "native-base";

class PieChart extends React.Component {
  state = {
    dataPie: {
      labels: ["Income", "Expenses"],
      datasets: [
        {
          data: [300, 300],
          backgroundColor: ["#28a745", "#dc3545"],
          hoverBackgroundColor: ["#28a75b", "#dc3556"]
        }
      ]
    }
  };

  render() {
    if(this.props.index === 0){
    return (
      <View>
        <MDBContainer>
          <h3 className="mt-5 text-light">
            <b>Pie chart</b>
          </h3>
          <Pie data={this.state.dataPie} options={{ responsive: true }} />
        </MDBContainer>
      </View>
    );
  }
}
}

export default PieChart;
