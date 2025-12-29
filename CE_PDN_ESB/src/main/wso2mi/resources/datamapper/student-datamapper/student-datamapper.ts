import * as dmUtils from "./dm-utils";
declare var DM_PROPERTIES: any;

/*
 * title : "root",
 * inputType : "JSON",
 */

interface BatchInput {
  batch: string;
  url: string;
  count: number;
}

interface Root {
  E02: BatchInput;
  e02a: BatchInput;
  E04: BatchInput;
  E05: BatchInput;
  E06: BatchInput;
  E07: BatchInput;
  E08: BatchInput;
  E10: BatchInput;
  E11: BatchInput;
  E12: BatchInput;
  E13: BatchInput;
  E14: BatchInput;
  E15: BatchInput;
  E16: BatchInput;
  E17: BatchInput;
  E18: BatchInput;
  E19: BatchInput;
  E20: BatchInput;
  E21: BatchInput;
  E22: BatchInput;
  E23: BatchInput;
  E96: BatchInput;
  E97: BatchInput;
  E99: BatchInput;
}

/*
 * title : "root",
 * outputType : "JSON",
 */
interface BatchData {
  batch: string;
  count: number;
  status: string;
}

interface OutputRoot {
  response: string;
  data: BatchData[];
}

/*
 * functionName : map_S_root_S_root
 * inputVariable : inputroot
 */
export function mapFunction(input: Root): OutputRoot {
  const data: BatchData[] = Object.values(input).map(mapBatchData);

  return {
    response: "200 success",
    data,
  };
}

function mapBatchData(input: BatchInput): BatchData {
  return {
    batch: input.batch,
    count: input.count,
    status: mapObjStatus(input.batch),
  };
}

function mapObjStatus(batch: string): string {
  // If batch number > 20 → undergraduate, else graduated
  const batchNumber = parseInt(batch.substring(1), 10);

  if (batchNumber > 20) {
    return "undergraduate";
  } else {
    return "graduated";
  }
}
