function initExitModal() {
  ddexitpop.init({
    contentsource: ['id', 'ddexitpop1'],
    fxclass: 'random',
    displayfreq: '1day',
    mobileshowafter: 10000,
    onddexitpop: function($popup){
      console.log('Exit Pop Animation Class Name: ' + ddexitpop.settings.fxclass)
    }

  })
}