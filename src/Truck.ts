/**
 * This class creates a vehicle
 *
 * By:      Michael Clermont
 * Version: 1.0
 * Since:   2022-10-17
 */

import Vehicle from './Vehicle'

class Truck extends Vehicle {
  private licensePlate: string

  constructor (licensePlate: string, colour: string, maxSpeed: number) {
    super(colour, maxSpeed)
    this.licensePlate = licensePlate
  }

  // getters and setters
  public status (): void {
    console.log(
      `        --> Speed: ${super.getSpeed()}
        --> MaxSpeed: ${super.getMaxSpeed()}
        --> License Plate: ${this.licensePlate}
        --> Color: ${super.getColor()}`
    )
  }

  public getLicensePlate (): string {
    return this.licensePlate
  }

  public setLicensePlate (newLicensePlate: string): void {
    this.licensePlate = newLicensePlate
  }

  // provideAir method - break but with air pressure.
  public provideAir (airPressure: number): void {
    super.setSpeed(super.getSpeed() - airPressure / 2)

    if (super.getSpeed() < 0) {
      super.setSpeed(0)
    }
  }

  public airBreak (
    breakPower: number,
    breakTime: number,
    airPressure: number
  ): void {
    super.setSpeed(
      super.getSpeed() - breakPower * breakTime - airPressure * breakTime
    )

    if (super.getSpeed() < 0) {
      super.setSpeed(0)
    }
  }
}

export = Truck
