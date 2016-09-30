<cfscript>
  objectparams.render = 'client'; // client means it's going to be rendered via JS

  // In this example, we're not using objectparams for client-side data because we're using Mura.js entities
  // However, anything you put into objectparams becomes available via the 'this.context' inside of the Mura.UI extended class
</cfscript>
