import {
  Accessor,
  createMemo,
  createUniqueId as _createUniqueId,
} from "solid-js";

export default function createUniqueId(
  idOverride?: Accessor<string | undefined>
) {
  return createMemo(() => idOverride?.() ?? `mui-${_createUniqueId()}`);
}
