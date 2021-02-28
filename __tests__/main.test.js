const volumeIcon = require('../assets/scripts/main');

describe('volumeIcon test', () => {
    test('three bars', () => {
      expect(volumeIcon(67)).toMatch(`./assets/media/icons/volume-level-3.svg`);
    });

    test('three bars', () => {
        expect(volumeIcon(100)).toMatch(`./assets/media/icons/volume-level-3.svg`);
    });

    test('three bars', () => {
        expect(volumeIcon(65)).toMatch(`./assets/media/icons/volume-level-2.svg`);
    });
    
    test('three bars', () => {
        expect(volumeIcon(34)).toMatch(`./assets/media/icons/volume-level-2.svg`);
    });

    test('three bars', () => {
        expect(volumeIcon(33)).toMatch(`./assets/media/icons/volume-level-1.svg`);
    });

    test('three bars', () => {
        expect(volumeIcon(1)).toMatch(`./assets/media/icons/volume-level-1.svg`);
    });

    test('three bars', () => {
        expect(volumeIcon(0)).toMatch(`./assets/media/icons/volume-level-0.svg`);
    });
  });