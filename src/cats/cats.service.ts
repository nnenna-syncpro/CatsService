import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { response } from 'express';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AxiosHeaders, AxiosResponse } from 'axios';

@Injectable()
export class CatsService {
    private cats =[ //dummy data with breeds beng and abys
        {
          "id": "J2PmlIizw",
          "url": "https://cdn2.thecatapi.com/images/J2PmlIizw.jpg",
          "width": 1080,
          "height": 1350,
          "breeds":[{
            "id": "beng",
            "name": "Bengal"
          }]
        },
        {
          "id": "GAmy2bg8G",
          "url": "https://cdn2.thecatapi.com/images/GAmy2bg8G.jpg",
          "width": 750,
          "height": 750,
          "breeds":[{
            "id": "beng",
            "name": "Bengal"
          }]
        },
        {
          "id": "Rl39SPjDO",
          "url": "https://cdn2.thecatapi.com/images/Rl39SPjDO.png",
          "width": 1198,
          "height": 1379,
          "breeds":[{
            "id": "beng",
            "name": "Bengal"
          }]
        },
        {
          "id": "8RsP7Xt3h",
          "url": "https://cdn2.thecatapi.com/images/8RsP7Xt3h.jpg",
          "width": 1024,
          "height": 817,
          "breeds":[{
            "id": "beng",
            "name": "Bengal"
          }]
        },
        {
          "id": "byQhFO7iV",
          "url": "https://cdn2.thecatapi.com/images/byQhFO7iV.jpg",
          "width": 1795,
          "height": 2397,
          "breeds":[{
            "id": "beng",
            "name": "Bengal"
          }]
        },
        {
          "id": "UhqCZ7tC4",
          "url": "https://cdn2.thecatapi.com/images/UhqCZ7tC4.jpg",
          "width": 1600,
          "height": 1200,
          "breeds":[{
            "id": "beng",
            "name": "Bengal"
          }]
        },
        {
          "id": "O3btzLlsO",
          "url": "https://cdn2.thecatapi.com/images/O3btzLlsO.png",
          "width": 1100,
          "height": 739,
          "breeds":[{
            "id": "beng",
            "name": "Bengal"
          }]
        },
        {
            "id": "xnzzM6MBI",
            "url": "https://cdn2.thecatapi.com/images/xnzzM6MBI.jpg",
            "width": 2592,
            "height": 1629,
          "breeds":[{
            "id": "abys",
            "name": "Abyssinian"
          }]
        },
        {
            "id": "N-94oSJ5T",
            "url": "https://cdn2.thecatapi.com/images/N-94oSJ5T.jpg",
            "width": 1920,
            "height": 1280,
          "breeds":[{
            "id": "abys",
            "name": "Abyssinian"
          }]
        },
        {
            "id": "itfFA4NWS",
            "url": "https://cdn2.thecatapi.com/images/itfFA4NWS.jpg",
            "width": 1280,
            "height": 914,
          "breeds":[{
            "id": "abys",
            "name": "Abyssinian"
          }]
        }
      ]

    
    //grab HttpService to use in class
    constructor(private httpService: HttpService){}
    //private variables in constructor become class variables

    //from the cat api 
    getCatsByBreed(breed_ids?: string): Observable<AxiosResponse<object>>{ 
      // var config ={
      //   Headers:{
      //     'x-api-key': 'live_1nl7Ihhij1vCPFXp9DrmDvujAtEVOQpsKhgoJBd0FilcN2gJYTSmq86wbxeGVIei'
      //   }
      // };
        if (breed_ids){
         return this.httpService.get('https://api.thecatapi.com/v1/images/search', {
          headers:{
            'x-api-key': 'live_1nl7Ihhij1vCPFXp9DrmDvujAtEVOQpsKhgoJBd0FilcN2gJYTSmq86wbxeGVIei'
          }
         })
         .pipe(
            map((axiosResponse : AxiosResponse) => {return axiosResponse.data}),
          
         )
        }
        return this.httpService.get('https://api.thecatapi.com/v1/images/search?limit=10')
        .pipe(
            map((axiosResponse : AxiosResponse) => {return axiosResponse.data}),
            
        )
    }

    //using response
    // getCatsByBreed(breed_ids?: string){ //response would be a response object with a data object inside
    //     if (breed_ids){
    //      return this.httpService.get('https://api.thecatapi.com/v1/images/search')
    //      .pipe(
    //         map((response) => response.data),
    //         map((data) => ({
    //             id: data.id,
    //             url: data.url,
    //             width: data.width,
    //             height: data.height,
    //             breeds: data.breeds
    //         }))
    //      )
    //     }
    //     return this.httpService.get('https://api.thecatapi.com/v1/images/search')
    //     .pipe(
    //         map((response) => response.data),
    //         map((data) => ({
    //             id: data.id,
    //             url: data.url,
    //             width: data.width,
    //             height: data.height,
    //             breeds: data.breeds
    //         }))
    //     )
    // }

    //filter hardcoded cats by breed id
    // getCatsByBreed(breed_ids?: 'beng' | 'abys'){ //response would be a response object with a data object inside
    //    if (breed_ids){
    //     return this.cats.filter(cat => cat.breeds.find(breed => breed.id === breed_ids))
    //    }
    //    return this.cats
    // }

}
