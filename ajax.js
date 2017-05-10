/* jshint esversion: 6 */
/**
 * [description]
 * @return {[type]} [description]
 */
yang = function(){

};

yang.prototype = {

  constructor: yang,

  ajax (url, settings) {
    // If url is an object...
    if( typeof url === 'object' ){
      settings = url;
      url = settings.url ? settings.url : undefined;
    }

    let yangXHRPromise = new Promise( (resolve, reject) => {
      // instance a XMLHttpRequest Object
      let xhr = new XMLHttpRequest();

      //
      xhr.open(
        settings.type,
				settings.url,
				settings.async,
				settings.username,
				settings.password
      );

      // Override mime type if needed
      if( typeof settings.mimetype === 'string' ){
        xhr.overrideMimeType( settings.mimetype );
      }

      // sets the value of an HTTP request header
      if( typeof settings.headers === 'object' ){
        let headers = settings.headers;
        for ( let header in headers )
          xhr.setRequestHeader( header, headers[header] );
      }

      // timeout property is an unsigned long representing the number of milliseconds
      if( typeof settings.timeout === 'number' ){
        xhr.timeout = settings.timeout;
      }
      if( typeof settings.ontimeout === 'function' ){
        xhr.ontimeout = settings.ontimeout;
      }

      // The progress event is fired to indicate that an upload or download is in progress.
      if( typeof settings.progress === 'object' ){
        if( typeof settings.progress.uploadProgress === 'function' ){
          xhr.upload.addEventListener('progress', uploadProgress(e));
        }
        if( typeof settings.progress.downloadProgress === 'function' ){
          xhr.addEventListener('progress', downloadProgress(e));
        }
      }

      //
    });

  }
};
