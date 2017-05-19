export class ToastStub {
	getTransitionName(direction : string) : string {
		return '';
	}

	isValidPosition(position : string) : boolean {
		return true;
	}

	setMessage(message : string) : ToastStub {
		return this;
	}

	setDuration(dur : number) : ToastStub {
		return this;
	}

	setPosition(pos : 'top' | 'middle' | 'bottom') : ToastStub {
		return this;
	}

	setCssClass(cssClass : string) : ToastStub {
		return this;
	}

	setShowCloseButton(closeButton : boolean) : ToastStub {
		return this;
	}

	present(navOptions : any = {}) : Promise<any> {
		return Promise.resolve ({});
	}

	dismissAll() {
		return;
	}
}
