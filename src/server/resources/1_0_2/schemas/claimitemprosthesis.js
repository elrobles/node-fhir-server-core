/**
 * @name exports
 * @summary ClaimItemProsthesis Class
 */
module.exports = class ClaimItemProsthesis {
	constructor(opts) {
		// Create an object to store all props
		Object.defineProperty(this, '__data', { value: {} });

		// Define getters and setters as enumerable

		Object.defineProperty(this, '_id', {
			enumerable: true,
			get: () => this.__data._id,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._id = new Element(value);
			},
		});

		Object.defineProperty(this, 'id', {
			enumerable: true,
			get: () => this.__data.id,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.id = value;
			},
		});

		Object.defineProperty(this, 'extension', {
			enumerable: true,
			get: () => this.__data.extension,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Extension = require('./extension.js');
				this.__data.extension = Array.isArray(value) ? value.map(v => new Extension(v)) : [new Extension(value)];
			},
		});

		Object.defineProperty(this, 'modifierExtension', {
			enumerable: true,
			get: () => this.__data.modifierExtension,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Extension = require('./extension.js');
				this.__data.modifierExtension = Array.isArray(value)
					? value.map(v => new Extension(v))
					: [new Extension(value)];
			},
		});

		Object.defineProperty(this, '_initial', {
			enumerable: true,
			get: () => this.__data._initial,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._initial = new Element(value);
			},
		});

		Object.defineProperty(this, 'initial', {
			enumerable: true,
			get: () => this.__data.initial,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.initial = value;
			},
		});

		Object.defineProperty(this, '_priorDate', {
			enumerable: true,
			get: () => this.__data._priorDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._priorDate = new Element(value);
			},
		});

		Object.defineProperty(this, 'priorDate', {
			enumerable: true,
			get: () => this.__data.priorDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.priorDate = value;
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/oral-prosthodontic-material
		Object.defineProperty(this, 'priorMaterial', {
			enumerable: true,
			get: () => this.__data.priorMaterial,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.priorMaterial = new Coding(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ClaimItemProsthesis',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ClaimItemProsthesis';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_initial: this._initial && this._initial.toJSON(),
			initial: this.initial,
			_priorDate: this._priorDate && this._priorDate.toJSON(),
			priorDate: this.priorDate,
			priorMaterial: this.priorMaterial && this.priorMaterial.toJSON(),
		};
	}
};
