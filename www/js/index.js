/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// based on code from https://medium.com/@alexdimango/an-apache-cordova-with-api-fetch-and-bootstrap-in-five-minutes-64b248b30940


$(document).ready(function() {
    setInterval(()=>app.updateBuildingTemp(),3000);
});


var app = {

    api_url: 'https://smartbuildingucm.herokuapp.com/building/temp',
    api_your_home_url: 'https://smartbuildingucm.herokuapp.com/house/temp/tucasa',


    // Application Constructor
    initialize: function() {
       
    },


    updateBuildingTemp: function() {
        $.ajax({
           type: "GET",
           dataType: 'text',
           url: app.api_url,
           success: app.onSuccess,
           error: app.onError
        });
        $.ajax({
           type: "GET",
           dataType: 'text',
           url: app.api_your_home_url,
           success: app.onSuccessYourHome,
           error: app.onError
        });
     },
 
    onSuccess: function(data) {
        if (data.hasOwnProperty('status')) {
           navigator.notification.alert('Please insert a valid feed!', null,'Error','OK');
        }else{
         $('#temp-building').html(data); 
       }
    }, 

    onSuccessYourHome: function(data) {
        if (data.hasOwnProperty('status')) {
           navigator.notification.alert('Please insert a valid feed!', null,'Error','OK');
        }else{
         $('#temp-your-home').innerHTML = data;
 
       }
    }, 
 
    onError: function(data, textStatus, errorThrown) {
         console.error('Data: ' + data);
         console.error('Status: ' + textStatus);
         console.error('Error: ' + errorThrown);
     },
        

 };


app.initialize();







