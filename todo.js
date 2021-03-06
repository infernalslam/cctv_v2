/*global angular, FileReader, $*/
angular.module('todoApp', ['base64'])
  .controller('TodoListController', function ($base64, $scope) {
    $scope.test = 'Project'
    $scope.data = {}
    $scope.showImage = false
    $scope.showCamera = false
    $scope.pagetitle = 'active'
    var fileSelect = document.createElement('input')
    fileSelect.type = 'file'
    if (fileSelect.disabled) {
      return
    }
    $scope.click = function () {
      fileSelect.click()
    }
    fileSelect.onchange = function () {
      var f = fileSelect.files[0]
      var r = new FileReader()
      r.onloadend = function (e) {
        $scope.data.b64 = e.target.result
        $scope.$apply()
        // console.log($scope.data.b64.replace(/^data:image\/(png|jpg);base64,/, ''))
        // $scope.imageBg = $scope.data.b64.replace(/^data:image\/(png|jpg);base64,/, '')
      }
      r.readAsDataURL(f)
      $scope.showImage = true
    }

    $scope.cameraStyle = []
    $scope.insert = function () {
      var cameraStyle = {
        id: Date.now(),
        css: {
          top: 100,
          left: 100,
          position: 'absolute',
          background: 'rgb(53, 255, 195)',
          width: '1em',
          height: '1em',
          animation: 'ripple 0.7s linear infinite'
          // 'border-radius': '50%'
        }
      }
      $scope.cameraStyle.push(cameraStyle)
    }

    $scope.moveObj = function (id) {
      $scope.cameraStyle.find(function (item) {
        if (item.id === id) {
          item.css = $('#' + id).position()
        }
      })
    }
    $scope.init = function () {
      $scope.cameraStyle.forEach(function (item) {
        // console.log(item)
        $('#' + item.id).draggable()
        $('#' + item.id).css(item.css)
      })
    }
    // ///////////////// CCTV ////////////////////////
    $scope.raduisStyle = []

    // dome
    $scope.raduis_dome = function (size) {
      if (size === 18) {
        var cctvStyle18 = {
          id: Date.now(),
          type: 'b18',
          style: 'dome',
          css: {
            top: 100,
            left: 300,
            // 'border-style': 'dashed',
            position: 'absolute',
            width: '50px',
            height: 'fit-content',
            'background-image': `url('./img/d18.png')`,
            'background-repeat': 'no-repeat',
            'transform': 'rotate(0deg)',
            opacity: '0.6'
          }
        }
        $scope.raduisStyle.push(cctvStyle18)
      } else if (size === 28) {
        var cctvStyle28 = {
          id: Date.now(),
          type: 'b28',
          style: 'dome',
          css: {
            top: 100,
            left: 300,
            position: 'absolute',
            width: '67px',
            height: 'fit-content',
            'background-image': `url('./img/d28.png')`,
            'background-repeat': 'no-repeat',
            'transform': 'rotate(0deg)',
            opacity: '0.6'
          }
        }
        $scope.raduisStyle.push(cctvStyle28)
      } else if (size === 33.4) {
        var cctvStyle33 = {
          id: Date.now(),
          type: 'b33.4',
          style: 'dome',
          css: {
            top: 100,
            left: 300,
            position: 'absolute',
            width: '80px',
            height: 'fit-content',
            'background-image': `url('./img/d33.4.png')`,
            'background-repeat': 'no-repeat',
            'transform': 'rotate(0deg)',
            opacity: '0.6'
          }
        }
        $scope.raduisStyle.push(cctvStyle33)
      } else if (size === 48) {
        var cctvStyle48 = {
          id: Date.now(),
          type: 'b48',
          style: 'dome',
          css: {
            top: 100,
            left: 300,
            position: 'absolute',
            width: '102px',
            height: 'fit-content',
            'background-image': `url('./img/d48.png')`,
            'background-repeat': 'no-repeat',
            'transform': 'rotate(0deg)',
            opacity: '0.6'
          }
        }
        $scope.raduisStyle.push(cctvStyle48)
      } else if (size === 150) {
        var cctvStyle150 = {
          id: Date.now(),
          type: 'b150',
          style: 'dome',
          css: {
            top: 100,
            left: 300,
            right: 0,
            bottom: 0,
            // 'border-style': 'dashed',
            position: 'absolute',
            width: '207px',
            height: 'fit-content',
            'background-image': `url('./img/d150.png')`,
            'background-repeat': 'no-repeat',
            'transform': 'rotate(0deg)',
            opacity: '0.6'
          }
        }
        $scope.raduisStyle.push(cctvStyle150)
      } else if (size === 70.6) {
        var cctvStyle70 = {
          id: Date.now(),
          type: 'b70.6',
          style: 'dome',
          css: {
            top: 100,
            left: 300,
            position: 'absolute',
            width: '147px',
            height: 'fit-content',
            'background-image': `url('./img/d70.6.png')`,
            'background-repeat': 'no-repeat',
            'transform': 'rotate(0deg)',
            opacity: '0.6'
          }
        }
        $scope.raduisStyle.push(cctvStyle70)
      } else if (size === 80) {
        var cctvStyle80 = {
          id: Date.now(),
          type: 'b0',
          style: 'dome',
          css: {
            top: 100,
            left: 300,
            position: 'absolute',
            width: '166px',
            height: 'fit-content',
            'background-image': `url('./img/d80.png')`,
            'background-repeat': 'no-repeat',
            'transform': 'rotate(0deg)',
            opacity: '0.6'
          }
        }
        $scope.raduisStyle.push(cctvStyle80)
      }
    }

    // box
    $scope.raduis_box = function (size) {
      if (size === 18) {
        var cctvStyle18 = {
          id: Date.now(),
          type: 'b18',
          style: 'box',
          css: {
            top: 100,
            left: 300,
            position: 'absolute',
            width: '50px',
            height: 'fit-content',
            'background-image': `url('./img/box18.png')`,
            'background-repeat': 'no-repeat',
            'transform': 'rotate(0deg)',
            opacity: '0.6'
          }
        }
        $scope.raduisStyle.push(cctvStyle18)
      } else if (size === 28) {
        var cctvStyle28 = {
          id: Date.now(),
          type: 'b28',
          style: 'box',
          css: {
            top: 100,
            left: 300,
            position: 'absolute',
            width: '67px',
            height: 'fit-content',
            'background-image': `url('./img/box28.png')`,
            'background-repeat': 'no-repeat',
            'transform': 'rotate(0deg)',
            opacity: '0.6'
          }
        }
        $scope.raduisStyle.push(cctvStyle28)
      } else if (size === 33.4) {
        var cctvStyle33 = {
          id: Date.now(),
          type: 'b33.4',
          style: 'box',
          css: {
            top: 100,
            left: 300,
            position: 'absolute',
            width: '80px',
            height: 'fit-content',
            'background-image': `url('./img/box33.4.png')`,
            'background-repeat': 'no-repeat',
            'transform': 'rotate(0deg)',
            opacity: '0.6'
          }
        }
        $scope.raduisStyle.push(cctvStyle33)
      } else if (size === 48) {
        var cctvStyle48 = {
          id: Date.now(),
          type: 'b48',
          style: 'box',
          css: {
            top: 100,
            left: 300,
            position: 'absolute',
            width: '102px',
            height: 'fit-content',
            'background-image': `url('./img/box48.png')`,
            'background-repeat': 'no-repeat',
            'transform': 'rotate(0deg)',
            opacity: '0.6'
          }
        }
        $scope.raduisStyle.push(cctvStyle48)
      } else if (size === 150) {
        var cctvStyle150 = {
          id: Date.now(),
          type: 'b150',
          style: 'box',
          css: {
            top: 100,
            left: 300,
            right: 0,
            bottom: 0,
            // 'border-style': 'dashed',
            position: 'absolute',
            width: '207px',
            height: 'fit-content',
            'background-image': `url('./img/box150.png')`,
            'background-repeat': 'no-repeat',
            'transform': 'rotate(0deg)',
            opacity: '0.6'
          }
        }
        $scope.raduisStyle.push(cctvStyle150)
      } else if (size === 70.6) {
        var cctvStyle70 = {
          id: Date.now(),
          type: 'b70.6',
          style: 'box',
          css: {
            top: 100,
            left: 300,
            position: 'absolute',
            width: '147px',
            height: 'fit-content',
            'background-image': `url('./img/box70.6.png')`,
            'background-repeat': 'no-repeat',
            'transform': 'rotate(0deg)',
            opacity: '0.6'
          }
        }
        $scope.raduisStyle.push(cctvStyle70)
      } else if (size === 80) {
        var cctvStyle80 = {
          id: Date.now(),
          type: 'b0',
          style: 'box',
          css: {
            top: 100,
            left: 300,
            position: 'absolute',
            width: '166px',
            height: 'fit-content',
            'background-image': `url('./img/box80.png')`,
            'background-repeat': 'no-repeat',
            'transform': 'rotate(0deg)',
            opacity: '0.6'
          }
        }
        $scope.raduisStyle.push(cctvStyle80)
      }
    }
    // bullet
    $scope.raduis_bullet = function (size) {
      if (size === 18) {
        var cctvStyle18 = {
          id: Date.now(),
          type: 'b18',
          style: 'bullet',
          css: {
            top: 100,
            left: 300,
            position: 'absolute',
            // 'border-style': 'dashed',
            width: '50px',
            height: 'fit-content',
            'background-image': `url('./img/b18.png')`,
            'background-repeat': 'no-repeat',
            'transform': 'rotate(0deg)',
            opacity: '0.6'
          }
        }
        $scope.raduisStyle.push(cctvStyle18)
      } else if (size === 28) {
        var cctvStyle28 = {
          id: Date.now(),
          type: 'b28',
          style: 'bullet',
          css: {
            top: 100,
            left: 300,
            position: 'absolute',
            width: '67px',
            height: 'fit-content',
            'background-image': `url('./img/b28.png')`,
            'background-repeat': 'no-repeat',
            'transform': 'rotate(0deg)',
            opacity: '0.6'
          }
        }
        $scope.raduisStyle.push(cctvStyle28)
      } else if (size === 33.4) {
        var cctvStyle33 = {
          id: Date.now(),
          type: 'b33.4',
          style: 'bullet',
          css: {
            top: 100,
            left: 300,
            position: 'absolute',
            width: '80px',
            height: 'fit-content',
            'background-image': `url('./img/b33.4.png')`,
            'background-repeat': 'no-repeat',
            'transform': 'rotate(0deg)',
            opacity: '0.6'
          }
        }
        $scope.raduisStyle.push(cctvStyle33)
      } else if (size === 48) {
        var cctvStyle48 = {
          id: Date.now(),
          type: 'b48',
          style: 'bullet',
          css: {
            top: 100,
            left: 300,
            position: 'absolute',
            width: '102px',
            height: 'fit-content',
            'background-image': `url('./img/b48.png')`,
            'background-repeat': 'no-repeat',
            'transform': 'rotate(0deg)',
            opacity: '0.6'
          }
        }
        $scope.raduisStyle.push(cctvStyle48)
      } else if (size === 150) {
        var cctvStyle150 = {
          id: Date.now(),
          type: 'b150',
          style: 'bullet',
          css: {
            top: 100,
            left: 300,
            right: 0,
            bottom: 0,
            // 'border-style': 'dashed',
            position: 'absolute',
            width: '207px',
            height: 'fit-content',
            'background-image': `url('./img/b150.png')`,
            'background-repeat': 'no-repeat',
            'transform': 'rotate(0deg)',
            opacity: '0.6'
          }
        }
        $scope.raduisStyle.push(cctvStyle150)
      } else if (size === 70.6) {
        var cctvStyle70 = {
          id: Date.now(),
          type: 'b70.6',
          style: 'bullet',
          css: {
            top: 100,
            left: 300,
            position: 'absolute',
            width: '147px',
            height: 'fit-content',
            'background-image': `url('./img/b70.6.png')`,
            'background-repeat': 'no-repeat',
            'transform': 'rotate(0deg)',
            opacity: '0.6'
          }
        }
        $scope.raduisStyle.push(cctvStyle70)
      } else if (size === 80) {
        var cctvStyle80 = {
          id: Date.now(),
          type: 'b0',
          style: 'bullet',
          css: {
            top: 100,
            left: 300,
            position: 'absolute',
            width: '166px',
            height: 'fit-content',
            'background-image': `url('./img/b80.png')`,
            'background-repeat': 'no-repeat',
            'transform': 'rotate(0deg)',
            opacity: '0.6'
          }
        }
        $scope.raduisStyle.push(cctvStyle80)
      }
    }

    $scope.moveObjraduisStyle = function (id) {
      $scope.raduisStyle.find(function (item) {
        if (item.id === id) {
          item.css.top = $('#' + id).position().top
          item.css.left = $('#' + id).position().left
        }
      })
    }
    $scope.initraduisStyle = function () {
      if (!$scope.del) {
        $scope.raduisStyle[$scope.idCctv].css.transform = 'rotate(' + $scope.range + 'deg)'
        // console.log($scope.width)
        if ($scope.width) {
          $scope.raduisStyle[$scope.idCctv].css.width = $scope.width + 'px'
          $scope.raduisStyle[$scope.idCctv].css['background-size'] = $scope.width + 'px'
        }
      }
      // $scope.raduisStyle[$scope.idCctv].css.height = $scope.raduisStyle[$scope.idCctv].css.width.replace(/(\d * )(px) /g, '$1') /2 + 'px'
      $scope.raduisStyle.forEach(function (item, index) {
        $('#' + item.id).draggable()
        $('#' + item.id).css(item.css)
      })
      // $scope.countCctv = $scope.raduisStyle.length
    }
    // $scope.range = 0
    // $scope.width = 0
    $scope.del = false
    $scope.showRange = false
    $scope.idCctv = 0
    $scope.tranformcctv = function (id, index) {
      console.log(index)
      $scope.idCctv = index
      $scope.showRange = true
      $scope.range = 0
      $scope.changeImg(index)
      $scope.changeSize(index)
      $scope.del = false
      $scope.width = $scope.raduisStyle[index].css.width.split('px')[0]
    }
    $scope.changeSize = function (index) {
    }
    $scope.domeStyle = 0
    $scope.boxStyle = 0
    $scope.bulletStyle = 0
    $scope.countStyle = function () {
      $scope.boxStyle = $scope.raduisStyle.filter(function (item) { return item.style === 'box' }).length
      $scope.domeStyle = $scope.raduisStyle.filter(function (item) { return item.style === 'dome' }).length
      $scope.bulletStyle = $scope.raduisStyle.filter(function (item) { return item.style === 'bullet' }).length
    }
    $scope.changeImg = function (id) {
      console.log($scope.raduisStyle[id])
      if ($scope.raduisStyle[id].type === 'b150') {
        $scope.office = './img/w2.8.png'
        $scope.off = './img/w2.8.png'
        $scope.cor = './img/c2.8.png'
      }
      if ($scope.raduisStyle[id].type === 'b18') {
        $scope.office = './img/w16.png'
        $scope.off = './img/w16.png'
        $scope.cor = './img/c16.png'
      }
      if ($scope.raduisStyle[id].type === 'b80') {
        $scope.office = './img/w3.6.png'
        $scope.off = './img/w3.6.png'
        $scope.cor = './img/c3.6.png'
      }
      if ($scope.raduisStyle[id].type === 'b70.6') {
        $scope.office = './img/w4.png'
        $scope.off = './img/w4.png'
        $scope.cor = './img/c4.png'
      }
      if ($scope.raduisStyle[id].type === 'b48') {
        $scope.office = './img/w6.png'
        $scope.off = './img/w6.png'
        $scope.cor = './img/c6.png'
      }
      if ($scope.raduisStyle[id].type === 'b33.4') {
        $scope.office = './img/w8.png'
        $scope.off = './img/w8.png'
        $scope.cor = './img/c8.png'
      }
      if ($scope.raduisStyle[id].type === 'b28') {
        $scope.office = './img/w12.png'
        $scope.off = './img/w12.png'
        $scope.cor = './img/c12.png'
      }
    }
    $scope.delcctv = function (id, index) {
      console.log(index, id)
      $scope.del = true
      // var index = $scope.raduisStyle.findIndex(item => item.id === id)
      $scope.raduisStyle.splice(index, 1)
      $scope.countStyle()
    }
    $scope.page = ''
    $scope.Bullet = function () {
      console.log('Bullet')
      $scope.page = 'Bullet'
      // $scope.raduis(150)
      // $scope.office = './img/w2.8.png'
    }
    $scope.Box = function () {
      $scope.page = 'Box'
    }
    $scope.Dome = function () {
      $scope.page = 'Dome'
    }
    $scope.testLens = function () {
      $scope.pagetitle = 'modal'
    }
    $scope.setplace = function (place) {
      console.log(place)
      if (place === 'Corridor') {
        // $scope.office = './img/c.png'
        $scope.office = $scope.cor
      } else if (place === 'office') {
        $scope.office = $scope.off
      }
    }
    $scope.print = function () {
      var x = document.getElementsByTagName('div')
      var source = x[4].outerHTML
      source = source.replace(/\<button ng-click="tranformcctv\(item1.id, \$index\)">Detail<\/button>/g, '')
      source = source.replace(/\<button ng-click="delcctv\(item1\.id, \$index\)">del<\/button>/g, '')
      console.log(source)
      printImg(source)
    }
    function printImg (source) {
      var printWindow = window.open('', 'Print Window', 'height=auto,width=auto')
      printWindow.document.write(source)
      printWindow.document.close()
      printWindow.print()
    }
  })
