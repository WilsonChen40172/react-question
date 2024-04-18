
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import { registerLocale } from 'react-datepicker';
import zhCN from './zh-CN'; // 中文文件
import './App.css';
function App() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const currentDate = new Date();

  registerLocale('zh-CN', zhCN);

  return (

    <div className="App">
      {/* Date range for one DatePicker */}
      <DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
        minDate={new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)}
        maxDate={new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)}
      />
    </div>
  );
}

export default App;
