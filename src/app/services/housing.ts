import { Injectable } from '@angular/core';
import { HousingLocation } from 'src/app/interfaces/housinglocation';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  url = '/assets/locations.json';

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    const json = await data.json();
    return json.locations ?? [];
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(this.url);
    const json = await data.json();
    return json.locations?.find(
      (location: HousingLocation) => location.id === id
    );
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }
}
