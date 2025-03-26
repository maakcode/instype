(function () {
  const FroalaEditor = require("froala-editor");
  FroalaEditor.DEFAULTS = Object.assign(FroalaEditor.DEFAULTS, {});

  FroalaEditor.PLUGINS.instypeCharCounter = function (editor) {
    /**
     * @returns {number}
     */
    function count() {
      return editor.el.textContent.length;
    }

    function _init() {
      editor.events.on("keyup contentChanged input", function () {
        const textCount = count();
        editor.events.trigger("instype.charCounter.update", [textCount]);
      });
    }

    return {
      _init,
      count,
    };
  };
})();
