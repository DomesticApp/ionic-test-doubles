export class ConfigStub {
	public get () : any {
		return '';
	}

	public getBoolean () : boolean {
		return true;
	}

	public getNumber () : number {
		return 1;
	}

	public set (...args : any[]) : ConfigStub {
		return this;
	}

	public settings (...args : any []) : ConfigStub {
		return this;
	}

	setModeConfig(modeName : string, modeConfig : any) {
		return;
	}

	getModeConfig(modeName : string) : any {
		return;
	}

	setTransition(trnsName : string, trnsClass : any) {
		return;
	}

	getTransition(trnsName : string) : any {
		return;
	}
}
