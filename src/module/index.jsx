import React from "react";
import { createRoot } from "react-dom/client";
import "pikaday/css/pikaday.css";
import "./styles.css";
import { HotTable, HotColumn } from "@handsontable/react";
import { registerLanguageDictionary, koKR } from 'handsontable/i18n';
import { data } from "./data";
import { ProgressBarRenderer } from "./renderers/ProgressBar";
import { StarsRenderer } from "./renderers/Stars";
import * as numbro from 'numbro';

import {
  drawCheckboxInRowHeaders,
  addClassesToRows,
  changeCheckboxCell,
  alignHeaders
} from "./hooksCallbacks";

import "handsontable/dist/handsontable.min.css";


registerLanguageDictionary(koKR);

const Excel = () => {
  return (
    <HotTable
      data={data}
      language='ko-KR'
      rowHeights= {[40,40,40]}
      colWidths={[140, 126, 192]}
      colHeaders={[
        "닉네임",
        "별풍선",
        "메모",
        // "Sell date",
        // "Order ID",
        // "In stock",
        // "Qty",
        // "Progress",
        // "Rating"
      ]}
      dropdownMenu={true}
      hiddenColumns={{
        indicators: true
      }}
      contextMenu={true}
      multiColumnSorting={true}
      filters={true}
      rowHeaders={true}
      afterGetColHeader={alignHeaders}
      beforeRenderer={addClassesToRows}
      afterGetRowHeader={drawCheckboxInRowHeaders}
      afterOnCellMouseDown={changeCheckboxCell}
      manualRowMove={true}
      licenseKey="non-commercial-and-evaluation"
    >
      <HotColumn data={1} />
      <HotColumn data={2} type="numeric"/>
      <HotColumn data={3} />
   
    </HotTable>
  );
};

const container = document.getElementById("container");
const root = createRoot(container);

root.render(<Excel />);
export default Excel;
