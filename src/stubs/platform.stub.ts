export class PlatformStub {
	public ready () : Promise<string> {
		return Promise.resolve ('READY');
	}

	public registerBackButtonAction (fn : Function, priority? : number) : Function {
		return (() => true);
	}

	public hasFocus (ele : any) : boolean {
		return true;
	}

	public doc () : any {
		return {};
	}

	public is () : boolean {
		return true;
	}

	public getElementComputedStyle (container : any) : any {
		return {
			paddingLeft: '10',
			paddingTop: '10',
			paddingRight: '10',
			paddingBottom: '10',
		};
	}

	public onResize (callback : any) {
		return callback;
	}

	public registerListener (ele : any, eventName : string, callback : any) : Function {
		return (() => true);
	}

	public win () : any {
		return {};
	}

	public raf (callback : any) : number {
		return 1;
	}

	public timeout (callback : any, timer : number) : number {
		// QSTN: Should we call callback?
		return 1;
	}

	public cancelTimeout (id : any) : void {
		return;
	}

	public getActiveElement () : any {
		return {};
	}
}
