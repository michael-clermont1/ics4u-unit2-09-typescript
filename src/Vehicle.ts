/**
 * This class creates a vehicle
 *
 * By:      Michael Clermont
 * Version: 1.0
 * Since:   2022-10-17
 */

class Vehicle {
  // the Vehicle class has five fields
  private speed: number = 0
  readonly maxspeed: number
  private color: string

  constructor (color: string, maxspeed: number) {
    this.color = color
    this.maxspeed = maxspeed
  }

  // getters
  public getSpeed (): number {
    return this.speed
  }

  public getMaxSpeed (): number {
    return this.maxspeed
  }

  public getColor (): string {
    return this.color
  }

  // setters
  public setColor (someColor: string): void {
    this.color = someColor
  }

  public setSpeed (newSpeed: number): void {
    this.speed = newSpeed
  }

  public accelerate (accelerationPower: number, accelerationTime: number): void {
    this.speed = accelerationPower * accelerationTime + this.speed

    if (this.speed > this.maxspeed) {
      this.speed = this.maxspeed
    }
  }

  public break (breakPower: number, breakTime: number): void {
    this.speed = this.speed - breakPower * breakTime

    if (this.speed < 0) {
      this.speed = 0
    }
  }

  public status (): void {
    console.log(
      `        --> Speed: ${this.speed}
        --> MaxSpeed: ${this.maxspeed}
        --> Color: ${this.color}`
    )
  }
}

export = Vehicle
