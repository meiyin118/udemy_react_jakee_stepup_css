/**
 * CSSを当てる方法(3) : Styled-jsx
 * コンポーネントの中でstyleタグをコンポーネントの中に書いてスタイル当てていく方法
 * Next.jsではデフォルトで入っている。
 * scss記法や擬似要素は使えない（プラグイン必要）
 */
export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">Styled JSX</p>
        <button type="button" className="button">
          Fight!!!!
        </button>
      </div>
      {/* jsxだということがわかるように、`jsx='true'`を設定する */}
      <style jsx="true">{`
        .container {
          margin-top: 20px;
          border: solid 2px blue;
          border-radius: 10px;
          padding: 8px;
        }
        .title {
          font-size: 20px;
          color: skyBlue;
        }
        .button {
          background-color: black;
          color: white;
          appearance: none;
          border: none;
          padding: 8px;
          border-radius: 4px;
          letter-spacing: 0.1em;
          // &:hover {
          //   cursor: pointer;
          //   background-color: blue;
          // }
        }
        // デフォルトだとscss記法や擬似要素を指定できない（プラグインが必要）
        .button:hover {
          cursor: pointer;
          background-color: blue;
        }
      `}</style>
    </>
  );
};
