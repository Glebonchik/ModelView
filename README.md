# ModelView

**ModelView** - небольшое веб приложения для просмотра 3D-моделей в браузере. Для просмотра используется библеотека react-three. 

## Основные функции
- Drag'n'Drop меню для загрузки файлов
- Просмотр 3D модели в браузере
- Поддерживаются файлы .gltf, .glb


## Структура проекта

- **components/DragAndDrop.tsx**: компонент драг энд дроп меню
- **components/Header.tsx**: Заголовок сайта
- **components/ViewModel.tsx**: Компонент, отвечающий за рендер модели
- **transfers/ModelViewer.tsx**: Помошник для создания примитива и дальнейшего использования в рендеринге объект.
- **interfaces/**: Директория, содержащая интерфейсы.
  - `modelViewerProps.ts`: пропы для хелпера **ModelViewer.tsx**

## Установка

1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/Glebonchik/ModelView.git
   cd ModelView

2. Установка зависемостей:
  ```bash
    yarn
