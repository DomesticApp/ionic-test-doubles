export class AlertStub {
	getTransitionName(direction : string) : string {
		return '';
	}

	setTitle(title : string) : AlertStub {
		return this;
	}

	setSubTitle(subTitle : string) : AlertStub {
		return this;
	}

	setMessage(message : string) : AlertStub {
		return this;
	}

	addInput(input : any) : AlertStub {
		return this;
	}

	addButton(button : any) : AlertStub {
		return this;
	}

	setCssClass(cssClass : string) : AlertStub {
		return this;
	}

	setMode(mode : string) : void {
		return;
	}

	present(navOptions : any = {}) : Promise<any> {
		return Promise.resolve({});
	}

	dismiss (role = '') : Promise<any> {
		return Promise.resolve ({});
	}
}
