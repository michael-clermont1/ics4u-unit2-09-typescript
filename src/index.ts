/**
 * This is the main code that runs
 * with the Vehicle Class.
 * By:      Michael Clermont
 * Version: 1.0
 * Since:   2022-10-17
 */

import Bike from './Bike'
import Truck from './Truck'

// new Bike
const bike = new Bike('Red', 40)

console.log('Created Bmx bike.\nStatus:\n')
bike.status()

console.log('Set the cadense to 10\n')
bike.accelerate(10)
bike.status()

console.log('\nAccelerate by 15:')
bike.accelerate(15)
bike.status()

console.log('\nRing bell.')
bike.ringBell()

const truck = new Truck('Grey', 'HGC-3456F', 200)

console.log('Created a Truck.\nStatus:\n')
truck.status()

console.log('\nAccelerating, 20 of power for ten seconds:')
truck.accelerate(20, 10)
console.log('New speed: ' + String(truck.getSpeed()))

console.log('\nBreaking, 1 of power for 1 sec with 5 air pressure.')
truck.airBreak(1, 1, 4)
console.log('New speed: ' + String(truck.getSpeed()))

console.log('\nApplyed air pressure of 10:')
truck.provideAir(10)
console.log('New speed: ' + String(truck.getSpeed()))

console.log('\nDone.')
