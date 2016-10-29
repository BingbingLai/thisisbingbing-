const models = {
	_datas: {
		123: {
			id: 123,
			url: 'http://www.littlethings.com/wp-content/uploads/2014/07/post-10220-Smiling-Grumpy-Cat-o0aJ.jpeg',
			count: 0,
			active:1
		},
		234: {
			id:234,
			url: "https://i.ytimg.com/vi/APoCpZOrI4w/hqdefault.jpg",
			count: 0,
			active: 1
		}
	}, 

	_randomId: function() {
		function s4() {
			return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
		}
		return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
	},

	addDatas: function(url) {
		const id = this._randomId();
		_datas[id] = {
			id: id,
			url: url, 
			count: 0, 
			active: 1
		};
	},

	removeDatas: function(id) {
		this._datas[id][active] = 0;
		return true;
	}, 

	getActiveCats: function() {
		// [{url,count,id}] 
		const keys = Object.keys(this._datas);
		return keys.map((key) => this._datas[key]).filter((d) => Object.is(d.active, 1));
	},

	increment_count: function(id) {
		this._datas[id].count ++; 
	}

};

const views = {
	init: function(data) {
		this._data = data;
		this.render();
		this.register_events();

	},

	render: function() {
		const _outterCatElem = $('#cat');
		_outterCatElem.html('');
	    this._data.forEach( (d) => {
	        _outterCatElem.append(this._renderCat(d));
		});
	},
    // need to figure out how to register the event and the re-render.
    // reference: https://github.com/udacity/ud989-pizzamvo/blob/master/js/app.js
	register_events: function() {
		const _innerCatElems = $('#cat');
		if (_innerCatElems.length === 0) {
			return;
		}
		const self = this;
	    _innerCatElems.on('click', '.cat-controller', function(e) {
	    	debugger;
	    	    const catID = $(this).parents('.cat').data().id;

				// const catID = this.dataset.id;
				models.increment_count(catID);
				self.render();
		});
	},

	_renderCat: function(data) {
		const _catTemp = $('script[data-template="cat"]').html();
		return this._render_helper(_catTemp, data);
	},

	_render_helper: function(temp, data) {
		const ret = temp.replace(/\<\<(.*?)\>\>/g, function(match, token) {
			return data[token];
		});
		
		return ret;
	},

};


const controllers = {
	init: function() {
		this._data = models.getActiveCats();
		this._views = views;
	},

	renderAll: function() {
		this.init();
		this._views.init(this._data);
	},

}



controllers.renderAll();



























