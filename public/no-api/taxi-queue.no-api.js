document.addEventListener('alpine:init', () => {

	Alpine.data('TaxiQueue', () => {

		return {
			version: 'no-api-1.0',
			passengerQueueCount: 0,
			taxiQueueCount: 0, 

			joinQueue() {
				this.passengerQueueCount ++;
			},
			leaveQueue() {
				if (this.passengerQueueCount > 0) {
                    this.passengerQueueCount--;
                }
			},

			joinTaxiQueue() {
				this.taxiQueueCount++;
			},

			queueLength() {
				return this.passengerQueueCount;
			},

			taxiQueueLength() {
				return this.taxiQueueCount;
			},

			taxiDepart() {
				if (this.taxiQueueCount > 1 && this.passengerQueueCount >= 12) {
                    this.taxiQueueCount-= 1;
					this.passengerQueueCount -=12
				
                }
			}
		}

	});

});


