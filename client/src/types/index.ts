export namespace BetaPoses {
  export type V3VarsityJacket =
    | "blushing"
    | "comfy"
    | "exhausted"
    | "explain-emphasis"
    | "explain2"
    | "facepalm"

  export type V3LifeJacket =
    | "blushing"
    | "comfy"
    | "exhausted"
    | "explain-emphasis"
    | "explain2"
    | "facepalm"

  export type V4LifeJacket =
    | "blushing"
    | "comfy"
    | "exhausted"
    | "explain-emphasis"
    | "explain2"
    | "facepalm"

  export type V4Normal =
    | "blushing"
    | "comfy"
    | "exhausted"
    | "explain-emphasis"
    | "explain2"
    | "seductive"
}

export type AllPoses =
  | BetaPoses.V3LifeJacket
  | BetaPoses.V4LifeJacket
  | BetaPoses.V4Normal

export interface Timings<Poses extends AllPoses = BetaPoses.V3LifeJacket> {
  start: number
  end: number
  pose: Poses
}

// WIP
export interface _PostTimings {
  variant: string
  timings: Timings
  background: string
}
