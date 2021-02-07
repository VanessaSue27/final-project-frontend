import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';

import { Text, WeightGraphContainer } from '../styled-components/MainStyles';
import { DailyEntryTitle } from '../styled-components/DailyEntriesFormStyles';

export const WeightHistory = () => {
  const [chartData, setChartData] = useState({});
  const accessToken = useSelector((store) => store.user.accessToken);

  const WEIGHT_DATA = 'https://time-capsule-final.herokuapp.com/entries/latest';

  const weightChart = () => {
    // Two empty arrays where we are going to store our data after looping
    // and iterating over it
    const weightArray = [];
    const dateArray = [];

    fetch(WEIGHT_DATA, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      }
    })
      .then((response) => {
        return response.json()
      }).then((data) => {
      // when we receive the data we push it to the empty arrays and do a for...of loop
      // to iterate it and we also reverse the array since our latest entries
      // are being sorted by descending order in the backend and we want to show them in
      // ascending order in this chart
        for (const weights of data.reverse()) {
          weightArray.push(weights.dailyWeight);
          // the new Date is used to create a date object and then we format it with toDateString
          dateArray.push(new Date(weights.createdAt).toDateString());
        }
        setChartData({
          labels: dateArray,
          datasets: [
            {
              label: 'Weight',
              data: weightArray,
              borderColor: ['rgb(94,121,228)'],
              backgroundColor: ['rgb(139,152,243, 0.5)'],
              borderWidth: 4
            }
          ]
        });
      })
  };

  useEffect(() => {
    weightChart();
  });
  return (
    <>
      <div className="weight-chart">
        <WeightGraphContainer>
          <DailyEntryTitle>Weight Graph</DailyEntryTitle>
          <Text>
            We are aware that weight variation in an infant can be stressful, but keep in mind
            that these can depend on so many factors! Also, did you know that full term babies
            normally lose some weight in the first days? This is due to extra fluids loss.
          </Text>
          <Line
            data={chartData}
            options={{
              responsive: true,
              title: { text: 'Weight', display: false },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      autoSkip: true,
                      maxTicksLimit: 10,
                      beginAtZero: true
                    },
                    gridLines: {
                      display: true
                    }
                  }
                ],
                xAxes: [
                  {
                    gridLines: {
                      display: false
                    }
                  }
                ]
              }
            }} />
        </WeightGraphContainer>
      </div>
    </>
  );
};
