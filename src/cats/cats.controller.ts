import { Controller, Get, Param, Query } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats') //everything within this controller would have the prefix cats in the routes
export class CatsController {
    //Remember to never instantiate classes in Nestjs because a lot of it is done automatically for you
    //Need to import the CatsService which pulls from the API
    constructor(private readonly catsService: CatsService){}

    @Get() //decorator to inform nest that the method below is to create a HTTP Get
    getCatsByBreed(@Query('breed_ids') breed_ids?:string){
        return this.catsService.getCatsByBreed(breed_ids);
    }

    //GET / cats or /cats?breed_ids=value
    //displays results of filtered hardcoded cats by breed id 
    // @Get() 
    // getCatsByBreed(@Query('breed_ids') breed_ids?:'beng' | 'abys'){
    //     return this.catsService.getCatsByBreed(breed_ids);
    // }

    //Any GET method after the id would read everything after the slash as an id because the waterfall method matters
    //GET /cats/:id --> {}
    // @Get(':id') //the : makes it a parameter. Without the : it would specify a Get route
    // getCatsById(@Param('id') id:string){
    //     return this.catsService.getCatsById(id);
    // }
}
