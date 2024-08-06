import React, { FC, useState } from 'react';
import { DashboardWrapper } from './dashboard.styled';

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = () =>{
   const mockData = {
      "new york":{
      weather: 'snowy',
      
   },"hyderabad":{
      weather: 'sunny',
      
   },"vizag":{
      weather: 'sultry',
      
   },"bengaluru":{
      weather: 'cold',
      
   },"chennai":{
      weather: 'sultry',
      
   },"lodon":{
      weather: 'cold',
      
   }}
   const [searchText, useSearch] = useState<string>('')
   const search = () => {
      alert('search');
   }
   return (
      <DashboardWrapper data-testid="dashboard">

            <input type="text" name="search" value={searchText} placeholder='city' id="search" />
            <button type="button" onClick={() => search()}> get info</button>
      </DashboardWrapper>
     );

} 

export default Dashboard;
